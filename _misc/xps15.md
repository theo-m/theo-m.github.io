---
layout: post
title: "Ubuntu on the XPS 15 9560"
date: 2017-08-08
---

Dell makes good laptops. I installed Ubuntu Gnome 17.04 without any issue. I switch between Gnome and i3 quite often; I enjoy the carefree solutions Gnome offers, but i3's tiling business and customability makes it my best choice.

Software I use:

* google-chrome
* spotify
* dropbox
* sublime-text
* mplayer
* zsh & prezto

For the graphic card trouble, see this [gist](https://gist.github.com/whizzzkid/37c0d365f1c7aa555885d102ec61c048). My current grub config:

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

For a cool terminal, using `gnome-terminal`:

* for colorschemes: [gogh](https://github.com/Mayccoll/Gogh)
* for padding:

```bash
# ~/.config/gtk-3.0/gtk.css 
vte-terminal {
    padding: 20px 20px 20px 20px;
}
```