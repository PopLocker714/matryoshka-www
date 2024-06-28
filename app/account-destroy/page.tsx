"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// export const metadata: Metadata = {
//   title: "Удаление аккаунта Матрешка",
//   description: "",
// };

import cfg from '@/config.json'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";
import { redirect } from "next/navigation";

const headers: RequestInit['headers'] = {
  'Content-Type': 'application/json',
};

export default function DeleteAccount() {
  const [value, setValue] = useState('')
  const [codeValue, setCodeValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<{ message: string }[]>([])
  const [tempToken, setTempToken] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<{
    nickname: string, phone: string, profile: {
      avatar: string | null
      firstName: string
      lastName: string
    }
  } | null>(null)

  useEffect(() => {
    const sessionTempToken = sessionStorage.getItem('temp_token')
    const sessionToken = sessionStorage.getItem('token')
    const sessionUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    setTempToken(sessionTempToken)
    setToken(sessionToken)
    setUser(sessionUser)
    console.log(sessionUser);

    setLoading(false)
  }, [])

  useEffect(() => {
    if (loading) return

    if (tempToken) {
      ref.current?.focus()
    }
  }, [loading])

  const ref = React.useRef<HTMLInputElement>(null)

  const onSubmitPhone = async () => {
    setErrors([])
    setLoading(true)
    let valueFormatted = ''

    if (value[0] === '8') {
      valueFormatted = value.replace('8', '7')
    }

    if (value[0] === '+') {
      valueFormatted = value.replace('+7', '7')
    }

    try {
      const res = await fetch(cfg.API_URL + '/auth/phone', {
        method: "POST",
        headers,
        body: JSON.stringify({
          phone: valueFormatted,
          type: "CODE"
        })
      }).then(data => data.json()).finally(() => setLoading(false))

      if (res.status === "SUCCESS") {
        sessionStorage.setItem('temp_token', res.data.temp_token)
        setTempToken(res.data.temp_token)
      } else {
        if (Array.isArray(res.error)) {
          res.error.forEach((item: { extendMessage: string, message: string }) => {
            setErrors(prev => [...prev, { message: item.message }])
          })
        }

        if (typeof res.error === 'string') {
          setErrors(prev => [{ message: res.error }])
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitCode = async (value: string) => {
    setErrors([])
    setLoading(true)
    try {
      const res = await fetch(cfg.API_URL + '/auth/code', {
        method: "POST",
        headers,
        body: JSON.stringify({
          temp_token: tempToken,
          code: value
        })
      }).then(data => data.json()).finally(() => setLoading(false))

      console.log(res);

      if (res.status === "SUCCESS") {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('user', JSON.stringify(res.data.user))
        sessionStorage.removeItem('tempToken')
        setTempToken(null)
        setToken(res.data.token)
        setUser(res.data.user)
      } else {
        if (Array.isArray(res.error)) {
          res.error.forEach((item: { extendMessage: string }) => {
            setErrors(prev => [{ message: item.extendMessage }])
          })
        }

        if (typeof res.error === 'string') {
          setErrors(prev => [...prev, { message: res.error }])
        }
      }

    } catch (error) {
      console.log(error);
    }
  }

  const onChangeOTP = (e: string) => {
    console.log(e)
    setCodeValue(e)

    if (e.length === 4) {
      onSubmitCode(e)
    }
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 flex flex-1">
        <section className="py-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Удаление аккаунта Матрешка
          </h1>
          <p className="text-xl [&:not(:first-child)]:mt-6">
            На данной странице можно удалить аккаунт, все данные о вас будут стерты в течении недели.
          </p>

          {
            token ? (
              <div className="flex items-center flex-col w-full py-4">
                <h2 className="text-xl" >Удалить аккаунт?</h2>

                <div className="flex items-center flex-col w-full py-4">
                  <p>nickname: {user?.nickname}</p>
                  <p>phone: {'+' + user?.phone}</p>
                  <p>Имя: {user?.profile.firstName + ' ' + user?.profile.lastName}</p>
                  <Image className="rounded-full" src={user?.profile.avatar || ''} alt={user?.nickname || ''} width={300} height={300} />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => {
                    setToken(null)
                    setTempToken(null)
                    setCodeValue('')
                    setValue('')
                    setErrors([])
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    sessionStorage.removeItem('temp_token')
                  }
                  } variant={"outline"}>Отменить</Button>
                  <Button variant={'destructive'} type="submit" disabled={loading} onClick={() => {
                    setToken(null)
                    setTempToken(null)
                    setValue('')
                    setCodeValue('')
                    setErrors([])
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    sessionStorage.removeItem('temp_token')
                    redirect('/')
                  }}>Удалить</Button>

                </div>
              </div>
            ) :
              tempToken ?
                (
                  <div className="flex items-center flex-col w-full py-4">
                    <h2 className="text-xl mb-4">Введите одноразовый код из SMS</h2>
                    <InputOTP value={codeValue} onChange={onChangeOTP} ref={ref} onSubmit={(e) => {
                      console.log('onSubmit', e)
                    }} maxLength={4}>
                      <InputOTPGroup >
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                    <div className="flex gap-2 mt-4">
                      <Button onClick={() => {
                        sessionStorage.removeItem('temp_token')
                        setTempToken(null)
                        setCodeValue('')
                        setErrors([])
                      }
                      } variant={"outline"}>Отменить</Button>
                      <Button type="submit" disabled={codeValue.length !== 4 || loading} onClick={() => {
                        onSubmitCode(codeValue)
                      }}>Подтвердить</Button>
                    </div>
                  </div>
                )
                :
                loading ? null :
                  (
                    <div>
                      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
                        Подтвердите, что аккаунт действительно ваш
                      </p>
                      <p className=" mb-4">Ваш номер телефона</p>
                      <form className="flex max-w-md" onSubmit={(e) => {
                        e.preventDefault()
                        onSubmitPhone()
                      }}>
                        <Input disabled={loading} onChange={(e) => { setValue(e.target.value) }} defaultValue={value} placeholder="+70000000000" className="mr-2" />
                        <Button onSubmit={(e) => {
                          e.preventDefault()
                          onSubmitPhone()
                        }} disabled={loading} type="submit" >Подтвердить</Button>
                      </form>
                    </div>
                  )
          }
          {errors.map((e, i) => <p className="text-red-600" key={i}>{e.message}</p>)}
          {loading && <p >Загрузка...</p>}
        </section>
      </main >
      <Footer />
    </>
  );
}
