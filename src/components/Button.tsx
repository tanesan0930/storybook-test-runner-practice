import React from 'react';

interface ButtonProps {
  color?: string;
  name?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  color = '#73B7BF', // デフォルト色を一般的なブルーに設定
  name = 'ボタン',
  onClick,
  disabled = false,
}) => {
  const buttonStyle = {
    backgroundColor: disabled ? '#D3D3D3' : color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};
