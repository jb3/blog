---
layout: ../layouts/Layout.astro
title: Now (August 2024 edition)
description: My current focusses in life.
---

This page shows what I'm doing currently, if you have your own website, you
[should make your own](https://nownownow.com/about) too.


## Python Discord

Our DevOps team has lately picked back up steam. As part of that, I have
recently implemented a forwarding e-mail server using
[Postfix](https://postfix.org), together with
[postsrsd](https://github.com/roehling/postsrsd) this setup was delightful to
configure.

I have also recently overhauled [our documentation](https://docs.pydis.wtf/),
and we are currently exploring a new concept called "e-mail services". The idea
is that you send an e-mail to specific addresses, and a script on the other end
performs some useful action in response to that. Our first e-mail service will
give you `fortune`s! Send an e-mail to
[fortune@int.pydis.wtf](mailto:fortune@int.pydis.wtf) to test it out.

We've implemented Dovecot, Postfix, OpenDMARC, and OpenDKIM to make this
possible. It's been a fun project to work on, and I'm excited to see where it
goes.

All data is backed by our new unified login system, powered by FreeIPA and
Keycloak. This system allows us to have a single source of truth for all
accounts, and we can now easily integrate new services into our ecosystem.

Users are able to manage their own accounts, configure email forwarding, login
securely to a variety of on-premises and cloud services, and more.

## Owl Corp

A few friends from Python Discord and I have started a new project called Owl
Corp.

We're building small utilities to try improve the quality-of-life of developers 
with small  projects meant to have big impacts.

A selection of interesting projects we've been working on include:

- [**psql_extended**](https://github.com/owl-corp/psql_extended): A pre-built
    Docker image with PostgreSQL installed, as well as a few handy extensions
    for keeping database management simple.
- [**inotify-base**](https://github.com/owl-corp/inotify-base): A Docker image
    for use in Kubernetes sidecar containers, able to run a script
    whenever a file changes (blog post on this coming soon!).
- [**thallium**](https://github.com/owl-corp/thallium): A simple application to
    handle giveaways for online communities backed by Printful.

## Programming

I've recently rebuilt my website with [Astro](https://astro.build/) and it has
been a very pleasant experience, both for the website itself as well as
development. As part of this migration, my website now has a blog, including a
RSS feed, and this very page.

<hr/>

<sup>Updated August 23th, 2024, from the airport lounge.</sup>
