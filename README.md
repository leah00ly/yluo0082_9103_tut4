# QUIZ 8
## 1.Imaging Technique: Halftone
The technique I find inspiring is **Halftone**, it is a graphic technique that simulates continuous-tone imagery through the use of **dots**, varying in *size* (pulse-width modulation) in *spacing* (frequency modulation) or both, thus generating a gradient-like effect. 

I want to incorporate the Halftone screening technique in my major project using dots of different sizes, spacings, shapes, and colors to recreate the original painting. It is a highly adaptive technique with abundant screening choices, which helps to present the essence of the original piece and attach a **retro aesthetic** to it.

![Halftone_Face](/assets/Halftone_Face.jpg)
![Halftone_Astronaut](/assets/Halftone_Astronaut.jpg)
![Halftone_Collage](/assets/Halftone_Collage.jpg)
![Halftone_the Queen](/assets/Halftone_the%20Queen.jpg)

## 2.Coding Technique: Floyd-Steinberg Dithering
**Floyd-Steinberg Dithering** is currently one of the most popular methods used for halftoning. Its algorithm is based on **error dispersion**: for each pixel, it first identifies the closest available color, computes the difference between the pixel's value and the chosen color, and then distributes these error values proportionally to neighboring, unprocessed pixels. When processing these neighbors, it adds the errors and ensures values stay within the allowed range, creating halftone-like images with various shades and colors.

![Output Image](/assets/Output%20image.jpg)
[Example Code in Python](https://scipython.com/blog/floyd-steinberg-dithering/)