
# LichessEncrypter

LichessEncrypter is a small JavaScript script that converts a short string (29 characters maximum) to chess moves in PGN. The script also automatically uploads the PGN file to [Lichess.org](https://lichess.org/), and can also donwload and decrypt(decode, the strings arent really encrypted just encoded (but the name is cooler this way)) PGN files from [Lichess.org](https://lichess.org/).

Example of a message encrypted in a PGN file, [Hello world!](https://lichess.org/Zzsjdp42).

## Running the script

**Usage information:**

This script runs with Node.js and npm. To runn the script you must install Node.js and npm.

**Before running:**

- Create a ".env" file on the base the directory of the script and add the following contents to it:
``` env
TOKEN="TOKEN"
URL="https://lichess.org"
API="https://lichess.org/api"
```
- Get yout TOKEN [here](https://lichess.org/account/oauth/token).

- You also need to install the needed dependencies by running the following command:

```bash
npm install
```

### Actually running the script

**start.cmd:**
Generates a PGN for the given message, uploads it to [Lichess.org](https://lichess.org/) and downloads the game from [Lichess.org](https://lichess.org/) and decodes it.
```bash
.\start.cmd {mode} {message}
```

The only abailable mode is "message" and {message} can be any 29 or less character string.

```bash
.\start.cmd message "Hello world!"
```
---
**justGet.cmd:**
Downloads and decodes a PGN file from [Lichess.org](https://lichess.org/)
```bash
.\justGet.cmd id {gameId}
```

{gameId} must be a [Lichess.org](https://lichess.org/) game id.

```bash
.\start.cmd id "Zzsjdp42"
```
