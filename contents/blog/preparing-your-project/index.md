---
title: 6 Ways to prepare your Unity Project that will save you Time down the Road
date: 2020-04-26
template: blog
image: ./image.jpg
banner: ./banner.jpg
description: What if I told you that a few minutes of preparation can save you hours further along into the development of your game? The creator of Blood Rally Show shares some valuable insights.
---

A recent post on reddit caught my attention, where the solo developer of the title Blood Rally Show talks about his experience moonlighting his game and the things he wished he had known before starting development. 


### Use the latest Beta Version for your Project

By the time you finished your game (which will always be longer than you expected), experimental versions of the engine are probably going to be stable. Given that these will probably contain performance optimisations, graphical improvements and other features
that could improve your game at little to no cost or energy from your part, this could warrant dealing with a few editor bugs. Try to keep your editor up to date regardless and upgrade to the latest stable release if you start falling behind.

### Avoid Using 2D Physics

The 2D physics are not as performant as their 3D alternative, so even if you are developing a 2D game you should opt for the latter. 
This is because the 3D Physics are multithreaded and developed with performance in mind. The simplest way to implement this is by adding a 
standard Rigidbody to your game objects and disabling the influence of the physics on the rotation as well as positioning along an axis of your choice.

### Optimise your Files for the Build Process

Enable crunch compression on all the sprites you can (POT + crunch can easily turn 1.3Mb into 20Kb)Make builds as fast as possible. Invest some time to understand where your builds are bottlenecking, and you’ll save yourself a lot of time in the long run. For example, you don’t need to compile 32K shader variants on every build. Use preloaded shaders to get a significant speedup (Edit > Project Settings > Graphics > Shader Loading)


### If you want to enable modding, Build with it in mind from the Beginning
