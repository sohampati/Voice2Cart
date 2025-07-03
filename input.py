from faster_whisper import WhisperModel

class AudioTranscriber:
    def __init__(self, model_size="medium", compute_type="float32"):
        self.model = WhisperModel(model_size, compute_type=compute_type)

    def transcribe(self, path="audio.wav"):
        segments, _ = self.model.transcribe(path)
        return " ".join(segment.text.strip() for segment in segments).strip()

# Example usage

