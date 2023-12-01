import { useAccountArea } from "../hooks/useAccountArea";
import { calculateProgressBarWdith } from "../utilities/progressBar";

const AccountArea = () => {
  const { products, error } = useAccountArea()
  
  return (
    <div>
      <h1>Algo</h1>
      {error && <p>Error: {error}</p>}
      <div>
        
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {/* Missing product description */}
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div style={{ width: calculateProgressBarWdith(products.length) }}>Progress Bar</div>
    </div>
  );
};

export default AccountArea;
