import http.server
import socketserver
import os
import sys

class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = super().translate_path(path)
        if not os.path.exists(path) and not path.endswith('.html'):
            if os.path.exists(path + '.html'):
                return path + '.html'
            elif os.path.exists(os.path.join(path, 'index.html')):
                return os.path.join(path, 'index.html')
        return path

os.chdir("public")
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8081
with socketserver.TCPServer(("", PORT), CleanUrlHandler) as httpd:
    print(f"Serving on port {PORT} with clean URLs")
    httpd.serve_forever()
