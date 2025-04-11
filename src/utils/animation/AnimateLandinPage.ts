import { inView, animate } from 'motion';

export const titleAnimation = () => {
  inView('.titleAnimation', () => {
    animate(
      '.titleAnimation',
      { opacity: [0, 1], transform: ['translateY(-100px)', 'translateY(0px)'] },
      { duration: 1 }
    );
  });
};
export const iconAnimation = () => {
  inView('.iconAnimation', () => {
    animate(
      '.iconAnimation',
      { opacity: [0, 1], transform: ['translateX(-100px)', 'translateY(0px)'] },
      { duration: 1 }
    );
  });
};

export const subtitleAnimation = () => {
  inView('.subtitleAnimation', () => {
    animate(
      '.subtitleAnimation',
      { opacity: [0, 1], transform: ['translateY(100px)', 'translateY(0px)'] },
      { duration: 1 }
    );
  });
}