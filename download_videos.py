import requests

def download_file_from_google_drive(id, destination):
    URL = "https://docs.google.com/uc?export=download"

    session = requests.Session()

    response = session.get(URL, params = { 'id' : id }, stream = True)
    token = get_confirm_token(response)

    if token:
        params = { 'id' : id, 'confirm' : token }
        response = session.get(URL, params = params, stream = True)

    save_response_content(response, destination)    

def get_confirm_token(response):
    for key, value in response.cookies.items():
        if key.startswith('download_warning'):
            return value
    return None

def save_response_content(response, destination):
    CHUNK_SIZE = 32768
    with open(destination, "wb") as f:
        for chunk in response.iter_content(CHUNK_SIZE):
            if chunk:
                f.write(chunk)

download_file_from_google_drive('1oU0ll0pvKdX_LrOTtxS_9OUHdjfFpwCP', 'public/videos/unlock_potential.mp4')
download_file_from_google_drive('1etjpmj2ksCtm0v6USBnDlMjmtWgRuDZ7', 'public/videos/trade_on_signal.mp4')
print("Downloaded")
