import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import TextArea from '@/components/ui/TextArea'
import React from 'react'

const ManualComponent = ({
  setGptDetails,
  gptDetails
}) => {

  const handleChange = (e) => {
    setGptDetails({
      ...gptDetails,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className='overflow-auto w-full'>
      <form className='w-full'>
        <div className='flex flex-col space-y-1.5 w-full'>
          <div className='flex flex-col space-y-1.5'>
            <Label>Name</Label>
            <Input type='text' name = 'name' maxLength = {30} value = {gptDetails.name} onChange={handleChange} placeholder='Type Name of GPT' />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label>Short Description</Label>
            <Input type='text' name = 'short_description' maxLength = {100} value = {gptDetails.short_description} onChange={handleChange} placeholder='Type Short Description of GPT' />
          </div>  
          <div className='flex flex-col space-y-1.5'>
            <Label>System Prompt</Label>
            <TextArea rows={19} name = 'system_prompt' maxLength={1000} value = {gptDetails.system_prompt} onChange={handleChange} style={{resize:'none'}} type='text' placeholder='Type System Prompt of GPT' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ManualComponent