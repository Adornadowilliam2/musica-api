
# How to use bluetooth in ubuntu

- first you need check if the bluetooth open


```php
 lsusb | grep Bluetooth

```

- if there is something show it means there is you can follow this next step

```php
sudo apt update

```
 
- then install this bluetooth - manager

```php
sudo apt install bluez blueman pulseaudio-module-bluetooth

```
