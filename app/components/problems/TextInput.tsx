"use client"

import React, { ChangeEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../common/Button';

interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, onSubmit }) => (
  <div className="mb-8">
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Décrivez en quelques mots ce que représente pour vous la masculinité positive..."
      className="w-full p-4 border-2 border-blue-200 rounded-2xl focus:border-blue-500 focus:outline-none min-h-32 text-slate-700"
    />
    <Button
      onClick={onSubmit}
      icon={Send}
      className="mt-4"
    >
      Soumettre
    </Button>
  </div>
);