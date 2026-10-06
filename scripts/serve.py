"""Preview the generated website at its actual project path."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

DIST = Path(__file__).resolve().parents[1] / 'dist'


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if not self.path.startswith('/decision-999/'):
            self.send_error(404)
            return
        self.path = self.path[len('/decision-999'):]
        super().do_GET()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIST), **kwargs)


print('Preview: http://localhost:8000/decision-999/', flush=True)
ThreadingHTTPServer(('127.0.0.1', 8000), Handler).serve_forever()
