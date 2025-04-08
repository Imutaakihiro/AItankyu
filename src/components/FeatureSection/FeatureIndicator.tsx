const FeatureIndicator: React.FC = () => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
      ))}
    </div>
  );
};

export default FeatureIndicator;
