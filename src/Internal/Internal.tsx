import { Button, Input } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'
import axios from 'axios'
import React, { useState } from 'react'

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
  const [imgProgress, setImgProgress] = useState(0)
  const [fileProgress, setFileProgress] = useState(0)
  const [err, setErr] = useState('')
  const [msg, setMsg] = useState('')
  const clrMsg = (fn: (event: React.ChangeEvent<HTMLInputElement>) => void) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImgProgress(0)
    setFileProgress(0)
    setMsg('')
    setErr('')
    fn(event)
  }
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
  const changePass = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null)
  }
  const onImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImg(event.target.files ? event.target.files[0] : null)
  }
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
        await (s3
          .upload(file_params, function (err) {
            if (err) {
              console.log(err)
              throw err
            }
          })
          .on('httpUploadProgress', function (progress) {
            setFileProgress(Math.round((progress.loaded / progress.total) * 100))
          }) as AWS.S3.ManagedUpload).promise()
      ).Location
      const img_url = (
        await (s3
          .upload(img_params, function (err) {
            if (err) {
              console.log(err)
              throw err
            }
          })
          .on('httpUploadProgress', function (progress) {
            setImgProgress(Math.round((progress.loaded / progress.total) * 100))
          }) as AWS.S3.ManagedUpload).promise()
      ).Location
      axios
        .post('http://localhost:5000/uploadPrint', { name, img_url, file_url })
        .then(() => setMsg('File upload successful'))
        .catch(() => setErr('File upload unsuccessful'))
    }
  }
  return (
    <div
      className="flex justify-center"
      style={{
        width: '100%',
        fontSize: '18px',
        height: '100%',
        textAlign: 'left',
        color: 'black',
        fontFamily: 'freight-sans',
        backgroundColor: '#f3f3f3',
      }}
    >
      <Paper elevation={3} style={{ width: '40%', minWidth: '300px', margin: '30px' }}>
        <div className="flex items-start justify-start flex-column">
          <div className="ph4 pv4" style={{ fontSize: '28px', fontWeight: 'bold' }}>
            Upload Print Edition PDFs Here
          </div>
          <div className="ph4 pv3">
            <div className="pv3">Print edition full name</div>
            <Input type="text" required={true} style={{ width: '300px' }} value={name} onChange={clrMsg(changeName)} />
          </div>
          <div className="ph4 pv3">
            <div className="pv3">Password to upload</div>
            <Input
              type="password"
              required={true}
              style={{ width: '300px' }}
              value={password}
              onChange={clrMsg(changePass)}
            />
          </div>
          <div className="ph4 pv3">
            <div className="pv3">Upload print edition pdf</div>
            <div className="flex items-center">
              <Button variant="contained" component="label">
                Upload File
                <input type="file" accept=".pdf" onChange={clrMsg(onFileChange)} style={{ display: 'none' }} />
              </Button>
              <div className="ph2">{file?.name}</div>
            </div>
          </div>
          <div className="ph4 pv3">
            <div className="pv3">Upload Cover photo</div>
            <div className="flex items-center">
              <Button variant="contained" component="label">
                Upload Image
                <input type="file" accept="image/*" onChange={clrMsg(onImgChange)} style={{ display: 'none' }} />
              </Button>
              <div className="ph2">{img?.name}</div>
            </div>
          </div>
          <div className="ph4 pv5" style={{ width: '100%' }}>
            {imgProgress + fileProgress ? (
              <LinearProgress
                style={{ width: '100%' }}
                variant="determinate"
                value={(imgProgress + fileProgress) / 2}
              />
            ) : (
              <div />
            )}
            <div className="pv2" />
            <div className="flex items-center">
              <Button variant="contained" onClick={upload} color="primary" component="button">
                Submit
              </Button>
              <div className="ph2" style={{ color: 'red' }}>
                {err}
              </div>
              <div className="ph2" style={{ color: 'green' }}>
                {msg}
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
