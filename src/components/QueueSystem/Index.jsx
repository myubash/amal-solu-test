import React, {useState} from 'react'

const QueueSystem = (props) => {

  const [queue, setQueue] = useState([])

  const onAdd = () => {
    let highest = Math.max(...queue)
    if (highest === -Infinity) highest = 0
    const _queue = [...queue]
    _queue.push(highest + 1)
    setQueue(_queue)
  }

  const onSub = () => {
    const _queue = [...queue]
    _queue.shift()
    setQueue(_queue)
  }

  const onRemove = (idx) => {
    const _queue = [...queue]
    _queue.splice(idx, 1)
    setQueue(_queue)
  }


  return (
    <div className='row justify-content-around mt-5 container-fluid pt-5 text-center'>
      <h5>Queue system</h5>

      <div style={{
                display: 'flex',
                flexDirection: 'horizontal',
                width: '400px',
                height: '60px',
                fontSize: '20px',
                margin: '20px',
                borderTop: '2px solid green',
                borderBottom: '2px solid green'
            }}>
                {queue.map((item, idx) => {
                    return <div style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }}
                      onClick={() => onRemove(idx)}
                        key={item}>{item}</div>;
                })}
            </div>
            <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={onAdd}>enqueue</button>
            <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={onSub} warning>
                dequeue
            </button>
            <p style={{
                color: '#e84917',
                fontSize: '20px',
                margin: '20px'
            }}>Front Element : {queue[0] || 'empty'}</p>
  
            <p style={{
                color: '#175ce8',
                fontSize: '20px',
                margin: '20px'
            }}>Length of Queue : {queue.length}</p>
    </div>
  )
}

export default QueueSystem