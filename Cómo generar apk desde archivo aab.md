1. Generar .aab:
eas build -p android
Allow builds with dirty Git working tree (new default)

2. Comando para convertir .aab a .apks:
bundletool build-apks --bundle=application-75f242ee-6614-4e14-aa43-4928b35f251a.aab --output=orangutanclan.apks --mode=universal --ks=/Users/rubencisneros/Documents/Desarrollo/dev/OrangutanApp/@ruben0__OrangutanClan.jks --ks-key-alias=ba82222df56798b30ae7e50721c74546

(Puedes conseguir la información de la keystore mediante el comando eas credentials)

Keystore password: c9a46172cc0d4d3f581f276562649203
Key alias:         ba82222df56798b30ae7e50721c74546
Key password:      947fb666c0d8cb953d27e66c8df5d443


3. Cambiar .apks por .zip y descomprimir para conseguir .apk