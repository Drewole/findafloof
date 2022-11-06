import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { _classes } from '../utilities/helpers';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from '../utilities/FramerMotion';
import styles from '../../scss/components/modal.scss';

const cl = _classes(styles);

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
  visible: PropTypes.bool,
  className: PropTypes.string,
};

export default function Modal({ children, close, visible, className }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector('body');
    visible ? disableBodyScroll(body) : enableBodyScroll(body);
  }, [visible]);

  useEffect(() => {
    const prevEl = document.activeElement;

    if (modalRef && modalRef.current && visible) {
      const focusEls = [
        ...modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
        ),
      ];

      const firstEl = focusEls[0];
      const lastEl = focusEls[focusEls.length - 1];

      if (firstEl) {
        firstEl.focus();
      }

      const handleKeyDown = (e) => {
        const handleBackwardTab = () => {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        };
        const handleForwardTab = () => {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        };

        if (e.key === 'Tab') {
          if (focusEls.length === 1) {
            e.preventDefault();
          }
          if (e.shiftKey) {
            handleBackwardTab();
          } else {
            handleForwardTab();
          }
        }

        if (e.keyCode == 27) {
          close();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        prevEl.focus();
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [visible]);

  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <motion.div
          initial={{ opacity: 0, transition: { duration: 0.25 } }}
          animate={{ opacity: 1, transition: { duration: 0.25 } }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className={cl(['modal', visible && 'open', className && className])}
          onClick={(e) => {
            // no IE11 support: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
            if (
              e.target.classList &&
              e.target.classList.contains(cl('modal'))
            ) {
              close();
            }
          }}
        >
          <div
            className={cl('modal__container')}
            aria-label="alertdialog"
            tabIndex="-1"
            role="alertdialog"
            aria-modal="true"
            ref={modalRef}
          >
            <div className={cl('modal__inner')}>{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
