FROM ubuntu:22.04

LABEL name="rajnages" \
      version="1.0.1" \
      description="This is for demo purpose"

RUN apt-get update && apt-get install -y nodejs npm \
    curl iputils-ping nginx

WORKDIR /app

COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


