---
layout: ../layouts/Layout.astro
title: Now (May 2025 edition)
description: My current focusses in life.
---

This page shows what I'm doing currently, if you have your own website, you
[should make your own](https://nownownow.com/about) too.


## Python Discord

Our DevOps team has lately become dormant again. Our infrastructure is very
functional these days, there are few things that need to change to keep it
running. As such, most of our work these days is focussed on maintenance and
replying to any support questions that come from our talented <!-- and
completely expendable --> pool of helpers.

A project I recently implemented in large part was our [numbers
station](https://en.wikipedia.org/wiki/Numbers_station), which
was primarily an exercise in audio processing. While I'm still preparing the
changes for the review, the components used for it so far are:

- Icecast acts as the streaming server, fronted by nginx.
- VLC plays files placed in a directory to a virtual output.
- ffmpeg takes audio from that virtual output and adds noise to it for the
  authentic shortwave station feeling.
- A systemd timer regularly plays any audio files placed in a directory.
- Another systemd timer converts text files in a directory into audio played by
  the previous cronjob. This allows server users to have custom texts spoken out
  on air.

You may listen in at https://pydis.wtf/numbers. This also works via media
players such as `vlc`, `mpv`, if you're feeling adventerous, you might even
build a player with `ffmpeg`.

Overall this was a lot of fun to build. I learnt about ffmpeg audio processing,
configuration and deployment of Icecast, and covert spy information channels,
something I hope to use on my upcoming visit to Canada.


## Owl Corp

At Owl Corp, we are working on a new e-mail server. So far we are still
implementing the e-mail authentication protocols, though. Watch this space.


## Programming

I don't have much time for programming these days - in my free time, I am
primarily playing with electricity. My most recent project was hooking up an
electric chair for a halloween project. Turns out that pacemakers don't work
well with external voltages. This was a bit hard to explain to the police, but
thankfully I have indemnity insurance.

<hr/>

<sup>Updated May 8th, 2025, from the rubber room. The rubber room with rats.</sup>
