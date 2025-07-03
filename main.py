from transcription import record
from input import AudioTranscriber
def main():
    transcriber = AudioTranscriber()
    audio = record()
    text = transcriber.transcribe(audio)
    print(f"Transcribed Text: {text}")






if __name__ == "__main__":
    main()