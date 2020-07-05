# firebase-cloud-run-cache
Examples of Firebase hosting, CDN and Cloud Run.

This repository supplies artifacts for the Medium article.

The cloud-run-app directory contains a Cloud Run application that will be called to
demonstrate caching and caching control.  We can build the app using:

```
make build
```

and deploy it using

```
make deploy
```

The firebase directory contains firebase assets.  You should create a firebase environment
and then run `firebase deploy` from within that directory.


## Demo instructions

1. Create a firebase project
2. Change into cloud-run-app
3. Run
```
make build deploy
```
4. Chanage to ../firebase
5. Run
```
firebase deploy
```
6. Open a browser
7. Visit https://URL/cr/generate-default.  Notice that when you refresh, the date/time does not change.
8. Visit https://URL/cr/generate.  Notice that when you refresh, the date/time does change.