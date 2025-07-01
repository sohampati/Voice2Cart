import sounddevice as sd
from scipy.io.wavfile import write
from pydub import AudioSegment

import sounddevice as sd
import numpy as np
import queue
import threading
import sys
from scipy.io.wavfile import write

q = queue.Queue()
fs = 44100  # Sample rate
channels = 1
recording = True

# Callback function to put recorded audio into a queue
def callback(indata, frames, time, status):
    if status:
        print(status, file=sys.stderr)
    q.put(indata.copy())

# Threaded input to detect stop
def input_thread():
    input("Recording... Press Enter to stop\n")
    global recording
    recording = False

# Start input thread
threading.Thread(target=input_thread, daemon=True).start()

# Start audio stream
with sd.InputStream(samplerate=fs, channels=channels, callback=callback):
    audio_data = []

    while recording:
        audio_data.append(q.get())

# Concatenate all chunks
audio_np = np.concatenate(audio_data, axis=0)

# Save to WAV
write("audio.wav", fs, audio_np)
print("Saved to audio.wav")


# Convert to MP3
AudioSegment.from_wav("audio.wav").export("audio.mp3", format="mp3")