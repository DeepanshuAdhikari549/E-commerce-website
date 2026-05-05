import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {

  const {backendUrl, token, currency} = useContext(ShopContext);

  const [orderData, setOrderData] = useState([])
  const [tracking, setTracking] = useState(false)

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      else{
        const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers: {token}})
        if (response.data.success) {
          let allOrdersItem = []
          response.data.orders.map((order)=>{
            order.items.map((item)=>{
              item['status'] = order.status
              item['payment'] = order.payment
              item['paymentMethod'] = order.paymentMethod
              item['date'] = order.date
              allOrdersItem.push(item)
            })
          })
          setOrderData(allOrdersItem.reverse())
        }
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-500';
      case 'Shipped':
      case 'Out for delivery': return 'bg-blue-500';
      case 'Packing': return 'bg-yellow-400';
      default: return 'bg-orange-400';
    }
  }

  const handleTrackOrder = async () => {
    setTracking(true)
    await loadOrderData()
    setTracking(false)
    toast.success('Order status refreshed!')
  }

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          orderData.length === 0
            ? <p className='text-center text-gray-400 py-16'>No orders found.</p>
            : orderData.map((item, index)=>(
            <div key={index} className={`py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${index === 0 ? 'border-t' : ''}`}>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className={`min-w-2 h-2 rounded-full ${getStatusColor(item.status)}`}></p>
                  <p className='text-sm md:text-base font-medium'>{item.status}</p>
                </div>
                <button 
                  onClick={handleTrackOrder} 
                  disabled={tracking}
                  className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors disabled:opacity-60'
                >
                  {tracking ? 'Refreshing...' : 'Track Order'}
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
