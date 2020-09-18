echo "[+] Deploying to Firebase"
cd web
firebase deploy
cd ../

echo "[+] Finished deploying to Firebase"
echo "[+] Building desktop apps"
mkdir build
cd build
nativefier "https://carolum-301eb.web.app" -p linux -n carolum
nativefier "https://carolum-301eb.web.app" -p windows -n carolum
nativefier "https://carolum-301eb.web.app" -p osx -n carolum

rm -rf ../desktop/windows
rm -rf ../desktop/linux
rm -rf ../desktop/mac


mkdir ../desktop/windows/
mkdir ../desktop/linux/
mkdir ../desktop/mac/


zip -rT ../desktop/windows/carolum.zip carolum-win32-x64/
zip -rT ../desktop/linux/carolum.zip carolum-linux-x64/
zip -rT ../desktop/mac/carolum.zip carolum-darwin-x64/
echo "[+] Finished building desktop apps"

cd ../

rm -rf build
