---
layout: main
title: "Ubuntu on the XPS 15 9560"
date: 2017-08-08
---

I installed Ubuntu Gnome 17.04 without any issue. I switch between Gnome and i3 quite often; I enjoy the first for its ability to make (almost) everything work out of the box, and the second because tiling windows makes me more ~~productive~~ cool.

Software I use:

* ~~google-chrome~~ ~~firefox~~ google-chrome
* spotify
* dropbox
* sublime-text
* mplayer
* zsh & prezto
* zotero
* ~~zeal, somewhat~~
* qpdfview

Useful links to setup everything:
- [dealing with the graphic card](https://gist.github.com/whizzzkid/37c0d365f1c7aa555885d102ec61c048)
- [bluetooth sound with gnome](https://askubuntu.com/questions/801517/bluetooth-speaker-doesnt-show-up-in-output-devices-list)
- [using nautilus with i3](https://unix.stackexchange.com/questions/153483/launching-nautilus-file-browser-launches-gnome-desktop-how-to-suppress-it)
- [gogh: cool colorschemes for gnome terminal](https://github.com/Mayccoll/Gogh)
{: .nakedlist}

--- 
{: #smallruler}

My grub config
```bash
# /etc/default/grub & sudo update-grub2
GRUB_CMDLINE_LINUX_DEFAULT='quiet splash pcie_port_pm=off acpi_backlight=vendor acpi_osi=Linux acpi_osi=! acpi_osi="Windows 2009"'
```

For brigthness issues, edit or create as follow:

``` bash
# /usr/share/X11/xorg.conf.d/20-intel.conf
Section "Device"
    Identifier  "card0"
    Driver      "intel"
    Option      "Backlight"  "intel_backlight"
    BusID       "PCI:0:2:0"
EndSection
```