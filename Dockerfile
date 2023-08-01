	# Setup Stage - set up the ZSH environment for optimal developer experience
FROM node:16.16.0-alpine3.16
# Let scripts know we're running in Docker (useful for containerised development)
ENV RUNNING_IN_DOCKER true
# Use the unprivileged `node` user (pre-created by the Node image) for safety (and because it has permission to install modules)
ARG USER="nodeuser"
ENV HOME /home/$USER


# Set up ZSH and our preferred terminal environment for containers
RUN apk update && \
    apk --no-cache add zsh \
    zsh-autosuggestions zsh-syntax-highlighting \
    sudo \
    curl \
    git \
    nano \
    wget  



RUN sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

RUN echo "source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc && \
	echo "source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc 

RUN adduser -D $USER \
        && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER \
        && chmod 0440 /etc/sudoers.d/$USER

USER $USER

RUN sudo npm install -g knex

WORKDIR /usr/src/app



ENTRYPOINT /bin/zsh