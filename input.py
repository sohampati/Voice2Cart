from faster_whisper import WhisperModel

def transcribe_audio(path="audio.wav", model_size="medium", compute_type="float32"):
    model = WhisperModel(model_size, compute_type=compute_type)
    segments, _ = model.transcribe(path)

    # Collect the text from each segment
    full_transcript = ""
    for segment in segments:
        full_transcript += segment.text.strip() + " "
    
    return full_transcript.strip()

# Example usage

