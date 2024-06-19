import React from 'react'

const PayCycleInfo = () => {
  return (
    <div className="text-right text-xs text-neutral-400">
      <div className="text-amber-500">
        Note: “Yearly” does not have a custom value.
        <br />
        Adjust the pay cycle to use a custom value.{' '}
      </div>
      <div>default work period is:</div>
      <div>12 months •</div>
      <div>26 fortnights •</div>
      <div>52 weeks •</div>
      <div>260 days •</div>
      <div>2080 hours •</div>
    </div>
  )
}

export default PayCycleInfo
