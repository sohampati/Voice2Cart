import sounddevice as sd
import numpy as np
import queue
import threading
import sys
from scipy.io.wavfile import write
from pydub import AudioSegment
import os

def record(wav_path="audios/audio.wav", mp3_path="convertedaudios/audio.mp3", fs=44100, channels=1):
    q = queue.Queue()
    recording = True

    def callback(indata, frames, time, status):
        if status:
            print(status, file=sys.stderr)
        q.put(indata.copy())

    def input_thread():
        input("Recording... Press Enter to stop\n")
        nonlocal recording
        recording = False

    os.makedirs(os.path.dirname(wav_path), exist_ok=True)

    threading.Thread(target=input_thread, daemon=True).start()

    audio_data = []
    with sd.InputStream(samplerate=fs, channels=channels, callback=callback):
        while recording:
            audio_data.append(q.get())

    audio_np = np.concatenate(audio_data, axis=0)
    write(wav_path, fs, audio_np)
    print(f"Saved to {wav_path}")


    return wav_path


