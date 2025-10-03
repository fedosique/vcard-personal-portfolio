'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { Button, Input, Textarea, Typography } from '@/shared/ui';
import { contactApi } from '@/shared/api/endpoints';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await contactApi.sendMessage(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Typography variant="h3" className="mb-2">
          Contact Form
        </Typography>
        <Typography variant="body">
          Send me a message and I'll get back to you as soon as possible.
        </Typography>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              placeholder="Full name"
              {...register('name')}
              className={errors.name ? 'border-bittersweet-shimmer' : ''}
            />
            {errors.name && (
              <Typography variant="caption" className="mt-1 text-bittersweet-shimmer">
                {errors.name.message}
              </Typography>
            )}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email address"
              {...register('email')}
              className={errors.email ? 'border-bittersweet-shimmer' : ''}
            />
            {errors.email && (
              <Typography variant="caption" className="mt-1 text-bittersweet-shimmer">
                {errors.email.message}
              </Typography>
            )}
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            {...register('message')}
            className={errors.message ? 'border-bittersweet-shimmer' : ''}
          />
          {errors.message && (
            <Typography variant="caption" className="mt-1 text-bittersweet-shimmer">
              {errors.message.message}
            </Typography>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full md:w-auto md:ml-auto"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-500/10 p-4 text-green-400">
          <Typography variant="body">
            Message sent successfully! I'll get back to you soon.
          </Typography>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-500/10 p-4 text-red-400">
          <Typography variant="body">
            Failed to send message. Please try again later.
          </Typography>
        </div>
      )}
    </div>
  );
}
