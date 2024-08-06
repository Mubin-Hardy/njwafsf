import { ImageSlider } from '@/components/elements';
import { Box, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

//Todo: If Preview button or not dynamically import slider

// Wrapper around next Image
export const WandrImage = ({ srcObject, mainSrcIdx, baseStyle }) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <div>
      <div className={`relative ${baseStyle} group`} onClick={handleModalOpen}>
        <Image
          src={srcObject[mainSrcIdx].src}
          className={srcObject[mainSrcIdx]?.style}
          alt={srcObject[mainSrcIdx].alt}
          fill
        />
        <Button className="absolute bottom-0 left-2 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-100 ease-in-out bg-white rounded-lg p-2">
          view
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ImageSlider
            className="absolute w-full h-full top-0 left-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-4/6 lg:h-4/6 "
            srcObject={srcObject}
            handleModalClose={handleModalClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

WandrImage.prototypes = {
  srcObject: PropTypes.array.required,
  mainSrcIdx: PropTypes.number,
  baseStyle: PropTypes.string,
};
WandrImage.defaultPropTypes = {
  srcObject: [
    {
      src: 'https://images.unsplash.com/photo-1675458884693-9322658334d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      style: 'object-cover',
      alt: 'image',
    },
  ],
  mainSrcIdx: 1,
  baseStyle: 'w-80 h-80',
};
