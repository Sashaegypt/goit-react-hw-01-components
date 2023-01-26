import  css from './UserTransaction.module.css'

export const UserTransaction = ({ items }) => {
    return (
        <table className={css.table}>
  <thead className={css.table__head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.bodyTable}>
    {items.map(({ id, type, amount, currency}) =>(
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ))}
  </tbody>
</table>
    )
}