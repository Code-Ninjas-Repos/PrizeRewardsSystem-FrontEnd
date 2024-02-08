import subprocess

def install_dependencies():
    print("Installing project dependencies...")
    subprocess.run(["npm", "install", "react-router-dom@5.2.0"])

def main():
    install_dependencies()
    print("Installation complete. You're ready to start working on the project!")

if __name__ == "__main__":
    main()