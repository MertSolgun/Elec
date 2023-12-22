const CardTotal = ({ catchdata }) => {
  const tax = 0.18;
  const shipping = 25;

  const subtotal = catchdata.reduce(
    (acc, item) => acc + item.productprice * item.productquantity,
    0
  );

  let taxCalculate = subtotal * tax;
  let total = subtotal ? subtotal + taxCalculate + shipping : subtotal;
  let newYearsDiscount = total * 0.1;
  total -= newYearsDiscount;

  return (
    <div>
      <table className="max-[600px]:w-[450px] w-[600px] text-white mb-4 card-total">
        <tbody>
          <tr className="text-end">
            <th className="text-start">Subtotal</th>
            <td>
              {subtotal}$<span className="subtotal"></span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">Tax(18%)</th>
            <td>
              {taxCalculate.toFixed(2)} $<span className="tax"></span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">Shipping</th>
            <td>
              {shipping}$<span className="shipping"></span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">New Years Discount (%10) </th>
            <td>
              <span className="total text-red-500">
                -{newYearsDiscount.toFixed(2)}$
              </span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">Total</th>
            <td>
              {total.toFixed(2)} $<span className="total"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardTotal;
