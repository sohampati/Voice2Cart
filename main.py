from transcription import record
from input import transcribe_audio
def main():

    audio = record()
    text = transcribe_audio(path=audio, model_size="medium", compute_type="float32")
    print(f"Transcribed Text: {text}")






if __name__ == "__main__":
    main()