# Coolify deployment preparation

This repository is prepared to build a production container; it has **not** been deployed.

## Coolify settings

1. Connect the GitHub repository after the application source has been pushed to the selected branch. The initial README-only commit is not the application.
2. Use the repository root as the build context and select the Dockerfile build method.
3. Set the container's exposed port to `3000` and the health-check path to `/` if Coolify requires an explicit check.
4. No environment variables are required for the current property pages.
5. Do not configure a domain or DNS as part of this preparation.

The Docker image runs Next.js standalone output as a non-root user. The server is configured with `HOSTNAME=0.0.0.0` and `PORT=3000` for container networking.

## Local container check

After Docker Engine is available:

```sh
docker build -t smart-hunter-real-estate:local .
docker run --rm -p 3000:3000 smart-hunter-real-estate:local
```

Then open `http://localhost:3000/casa-ricaurte-1`. Remove the local image when no longer needed with `docker image rm smart-hunter-real-estate:local`.
