---
layout: post
title:  "Lovin the Joomla!"
date:   2017-10-08 21:35:04 -0700
categories: joomla
---

A couple of years ago I came across [Joomlatools][jtools] and was excited to improve my workflow. It was an impressive setup; one that I had little idea of how to use many of the tools.
Recently I had upgraded my virtualbox and vagrant apps and it all went haywire. Joomla! has been the community that teased me into the world wide web and though I have not done recent client work with it I always find myself coming back to play around and check things out. Unfortunately other priorities took over from deciphering all the errors I was receiving and I put it on the back burner. A month and a half later I got a wild hair to try again. After updating some issues with out of date PPAs and general Ubuntu maintenance I rid myself of some `apt update` errors but I still had this stinking problem with updating the guest additions. When I was trying to upgrade it from within the box the distribution's version was more crusty than it was trusty. Man I really thought I mussed it all up but then thanks to @GabLeRoux it was all cleared up by running `sudo /mnt/VBoxLinuxAdditions.run`. This drove me crazy because I kept thinking I would find my guest addition iso in `/media/cdrom/`. 

Now that the [Joomlatools][jtools] box is running again I am ready to play. The first thing I do is refresh my memory by running `box list` from within the virtual machine ( or through the easy wetty link from the dashboard ) and am ready to switch different php versions.


[jtools]: https://www.joomlatools.com/developer/tools/vagrant/getting-started/
[GabLeRoux]: https://github.com/dotless-de/vagrant-vbguest/issues/267#issuecomment-333931333
