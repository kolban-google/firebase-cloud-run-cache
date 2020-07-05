PROJECT_ID=$(shell gcloud config get-value core/project)
APP=cloud-run-app
all:
	@echo "build  - Build the docker image"
	@echo "deploy - Deploy the image to Cloud Run"

deploy:
	gcloud run deploy $(APP) \
		--image gcr.io/$(PROJECT_ID)/$(APP) \
		--max-instances 1 \
		--platform managed \
		--region us-central1 \
		--allow-unauthenticated
	@url=$(shell gcloud run services describe cloud-run-app --format='value(status.url)' --region us-central1 --platform managed); \
	echo "Target URL = $$url"

build:
	gcloud builds submit --tag gcr.io/$(PROJECT_ID)/$(APP)
