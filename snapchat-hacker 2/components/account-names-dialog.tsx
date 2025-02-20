"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface AccountNamesDialogProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (names: string[]) => void
  numberOfAccounts: number
  planName: string
}

export function AccountNamesDialog({ isOpen, onClose, onSubmit, numberOfAccounts, planName }: AccountNamesDialogProps) {
  const [accountNames, setAccountNames] = useState<string[]>(Array(numberOfAccounts).fill(""))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(accountNames.filter((name) => name.trim()))
    onClose()
  }

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...accountNames]
    newNames[index] = value
    setAccountNames(newNames)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-[#1DB954]/50 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#1DB954]">
            {numberOfAccounts === 1 ? "Enter Username" : `Enter ${numberOfAccounts} Usernames`}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {Array.from({ length: numberOfAccounts }).map((_, index) => (
            <div key={index}>
              <Input
                value={accountNames[index]}
                onChange={(e) => handleNameChange(index, e.target.value)}
                placeholder={`Username ${index + 1}`}
                className="bg-black/50 border-[#1DB954]/50 text-white placeholder:text-white/50"
              />
            </div>
          ))}
          <Button type="submit" className="w-full bg-[#1DB954] text-black hover:bg-[#1DB954]/90">
            Continue to Payment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

