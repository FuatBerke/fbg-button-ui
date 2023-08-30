import React from 'react'
import 'fbg-button-ui/dist/index.css'
import { Button } from 'fbg-button-ui'

const App = () => {
  return (
    <>
      {/* PRIMARY */}
      <div>
        <Button type='normal' color='primary' text='Button' />
        <Button type='outline' color='primary' text='Button' />
        <Button type='dashed' color='primary' text='Button' />
        <Button type='link' color='primary' text='Button' />
        <Button type='text' color='primary' text='Button' />
      </div>
      {/* SECONDARY */}
      <div>
        <Button type='normal' color='secondary' text='Button' />
        <Button type='outline' color='secondary' text='Button' />
        <Button type='dashed' color='secondary' text='Button' />
        <Button type='link' color='secondary' text='Button' />
        <Button type='text' color='secondary' text='Button' />
      </div>
      {/* SUCCESS */}
      <div>
        <Button type='normal' color='success' text='Button' />
        <Button type='outline' color='success' text='Button' />
        <Button type='dashed' color='success' text='Button' />
        <Button type='link' color='success' text='Button' />
        <Button type='text' color='success' text='Button' />
      </div>
      {/* WARNING */}
      <div>
        <Button type='normal' color='warning' text='Button' />
        <Button type='outline' color='warning' text='Button' />
        <Button type='dashed' color='warning' text='Button' />
        <Button type='link' color='warning' text='Button' />
        <Button type='text' color='warning' text='Button' />
      </div>
      {/* DANGER */}
      <div>
        <Button type='normal' color='danger' text='Button' />
        <Button type='outline' color='danger' text='Button' />
        <Button type='dashed' color='danger' text='Button' />
        <Button type='link' color='danger' text='Button' />
        <Button type='text' color='danger' text='Button' />
      </div>
    </>
  )
}

export default App
