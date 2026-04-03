FROM ubuntu:24.04
LABEL authors="cypherbits"

ENV DEBIAN_FRONTEND=noninteractive
ENV LC_ALL=C.UTF-8
ENV CFLAGS="-O2 -fstack-protector-strong -D_FORTIFY_SOURCE=2"
ENV CPPFLAGS="-D_FORTIFY_SOURCE=2"
ENV LDFLAGS="-Wl,-O1"

RUN apt-get update -y \
    && apt-get install -y software-properties-common ca-certificates build-essential autoconf pkg-config \
    && add-apt-repository ppa:ondrej/php \
    && apt-get update -y \
    && apt-get install -y php8.3-cli php8.3-dev \
    && rm -rf /var/lib/apt/lists/*

COPY . /making

RUN cd /making \
    && phpize \
    && ./configure --enable-blake3 \
    && make -j"$(nproc)" \
    && install -Dm755 modules/blake3.so /making/compiled/blake3.so

CMD ["bash"]
