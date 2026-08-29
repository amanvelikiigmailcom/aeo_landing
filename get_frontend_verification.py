import requests

def get_screenshot():
    response = requests.get('http://localhost:4321')
    if response.status_code == 200:
        print("Server is running on port 4321")
    else:
        print("Server returned status code:", response.status_code)

if __name__ == "__main__":
    get_screenshot()
