import { Button, Input } from '@material-ui/core'
import AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BUCKET_NAME = 'elasticbeanstalk-us-west-1-133954069817'
const s3 = new AWS.S3({
  accessKeyId: 'AKIAIURGPBK7K7PMTTLA',
  secretAccessKey: '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',
})
export default function Internal(): React.ReactElement {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [img, setImg] = useState<File | null>(null)
  const [err, setErr] = useState('')
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
  const changePass = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files ? event.target.files[0].name : null)
    console.log(file)
    setFile(event.target.files ? event.target.files[0] : null)
  }
  const onImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files ? event.target.files[0].name : null)
    console.log(img)
    setImg(event.target.files ? event.target.files[0] : null)
  }
  useEffect(() => {
    axios
      .get('http://localhost:5000/print')
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }, [])
  const validate = (): boolean => {
    if (name === '') {
      setErr('Name field cannot be empty.')
      return false
    } else if (password === '') {
      setErr('Password field cannot be empty')
      return false
    } else if (password !== 'BRMemesRKewl!1') {
      setErr('Password incorrect')
      return false
    } else if (file === null || file === undefined) {
      setErr('Please select pdf file')
      return false
    } else if (img === null || img === undefined) {
      setErr('Please select image photo')
      return false
    } else {
      return true
    }
  }
  const upload = async () => {
    if (validate() && file && img) {
      const file_params: PutObjectRequest = {
        Bucket: BUCKET_NAME,
        ContentDisposition: 'inline',
        ContentType: file.type,
        Key: file.name, // File name you want to save as in S3
        Body: file,
      }

      const img_params: PutObjectRequest = {
        Bucket: BUCKET_NAME,
        ContentDisposition: 'inline',
        ContentType: img.type,
        Key: img.name, // File name you want to save as in S3
        Body: img,
      }
      // Uploading files to the bucket
      const file_url = (
        await s3
          .upload(file_params, function (err) {
            if (err) {
              console.log(err)
              throw err
            }
          })
          .promise()
      ).Location
      const img_url = (
        await s3
          .upload(img_params, function (err) {
            if (err) {
              console.log(err)
              throw err
            }
          })
          .promise()
      ).Location
      console.log(file_url)
      console.log(img_url)
      console.log(await axios.post('http://localhost:5000/uploadPrint', { name, img_url, file_url }))
    }
  }
  return (
    <div
      className="flex items-start justify-start flex-column"
      style={{
        width: '100%',
        fontSize: '18px',
        height: '100%',
        textAlign: 'left',
        color: 'black',
        fontFamily: 'freight-sans',
        backgroundColor: 'white',
      }}
    >
      <div className="ph4 pv3">
        <div className="pv3">Print edition full name</div>
        <Input type="text" required={true} style={{ width: '300px' }} value={name} onChange={changeName} />
      </div>
      <div className="ph4 pv3">
        <div className="pv3">Password to upload</div>
        <Input type="password" required={true} style={{ width: '300px' }} value={password} onChange={changePass} />
      </div>
      <div className="ph4 pv3">
        <div className="pv3">Upload print edition pdf</div>
        <div className="flex items-center">
          <Button variant="contained" component="label">
            Upload File
            <input type="file" accept=".pdf" onChange={onFileChange} style={{ display: 'none' }} />
          </Button>
          <div className="ph2">{file?.name}</div>
        </div>
      </div>
      <div className="ph4 pv3">
        <div className="pv3">Upload Cover photo</div>
        <div className="flex items-center">
          <Button variant="contained" component="label">
            Upload Image
            <input type="file" accept="image/*" onChange={onImgChange} style={{ display: 'none' }} />
          </Button>
          <div className="ph2">{img?.name}</div>
        </div>
      </div>
      <div className="ph4 pv5">
        <Button variant="contained" onClick={upload} color="primary" component="button">
          Submit
        </Button>
        <div style={{ color: 'red' }}>{err}</div>
      </div>
    </div>
  )
}
