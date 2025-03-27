const PaperOverlay = () => {
  return (
    <div 
      className="absolute inset-0 z-50 pointer-events-none mix-blend-multiply opacity-30"
      style={{
        backgroundImage: `url(/images/paper.png)`,
        backgroundRepeat: 'repeat'
      }}
    />
  );
};

export default PaperOverlay; 