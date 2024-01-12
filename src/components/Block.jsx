// Block.js
import React from 'react';

const Block = ({ blockComponent: BlockComponent }) => {
    return (
        <div className="block">
            {/* Рендеринг компонента блока с передачей данных */}
            <BlockComponent />
        </div>
    );
};

export default Block;
