import { BACKGROUND, WIDTH, HEIGHT, SPACING } from "../const/canvas";

const kyukurarin = (image: HTMLImageElement | undefined) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d')!;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (image) {
      const scale = HEIGHT / image.height;
      const costomWidth = image.width * scale | 0;
      const centerLeft = (WIDTH - costomWidth) / 2 | 0;

      for (let i = 10; i >= 0; i--) ctx.drawImage(image, centerLeft - SPACING * i, 0, costomWidth, HEIGHT);
    }

    return canvas.toDataURL();
};

export default kyukurarin;
