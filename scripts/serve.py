"""Preview the generated site at its real project path."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from build import ROOT, read_json
from urllib.parse import urlsplit

BASE = urlsplit(read_json(ROOT / 'site/config.json')['url']).path


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT / 'dist'), **kwargs)

    def do_GET(self):
        if not self.path.startswith(BASE):
            return self.send_error(404)
        self.path = self.path[len(BASE) - 1:]
        super().do_GET()


print(f'Preview: http://localhost:8000{BASE}', flush=True)
ThreadingHTTPServer(('127.0.0.1', 8000), Handler).serve_forever()
