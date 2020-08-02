# Store Github Passphrase

> Stop entering your Passphrase

- Start your SSH agent

```bash
> eval $(ssh-agent)
```

- Add your private key (You will be required to enter your passphrase)

```bash
> ssh-add
```

- Save the key permanently

```bash
> ssh-add -K
```
