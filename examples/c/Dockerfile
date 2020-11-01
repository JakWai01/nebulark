FROM debian

WORKDIR /opt

RUN apt update
RUN apt install -y wget cmake git autoconf automake autotools-dev libtool

RUN wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-11/wasi-sdk-11.0-linux.tar.gz

RUN tar xvzf wasi-sdk-11.0-linux.tar.gz

ENV PATH="/opt/wasi-sdk-11.0/bin:$PATH"
