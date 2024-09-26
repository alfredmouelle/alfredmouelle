'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useScopedI18n } from '@locales/client';
import { useAction } from 'next-safe-action/hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { contactAction } from '@/actions/contact.action';
import { ContactRequest, contactSchema } from '@/schemas/contact.schema';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { cn } from '@/lib/utils';

export function ContactForm() {
  const t = useScopedI18n('section_contact.form');

  const form = useForm<ContactRequest>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const { execute: contactMe, status, result } = useAction(contactAction);

  useEffect(() => {
    if (status === 'idle' || !result.data) return;

    if (status === 'hasErrored') {
      toast.error(result.data.error);
      return;
    }

    if (status === 'hasSucceeded') {
      form.reset();
      toast.success(result.data.message);
      return;
    }
  }, [form, result.data, status]);

  return (
    <Form {...form}>
      <form
        id="contact-form"
        className="mt-10 flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(contactMe)}
      >
        <div className="grid items-center gap-4 md:grid-cols-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fields.name')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Alfred Mouelle"
                    {...field}
                    className={cn('', {
                      'border-destructive': !!form.formState.errors.name,
                    })}
                  />
                </FormControl>

                {form.formState.errors.name ? (
                  <p className="text-[0.8rem] font-medium text-destructive">
                    {t('errors.name')}
                  </p>
                ) : null}
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fields.email')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="alfredmouelle@gmail.com"
                    {...field}
                    className={cn('', {
                      'border-destructive': !!form.formState.errors.email,
                    })}
                  />
                </FormControl>

                {form.formState.errors.email ? (
                  <p className="text-[0.8rem] font-medium text-destructive">
                    {t('errors.email')}
                  </p>
                ) : null}
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fields.message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  rows={7}
                  {...field}
                  className={cn('', {
                    'border-destructive': !!form.formState.errors.message,
                  })}
                />
              </FormControl>

              {form.formState.errors.message ? (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {t('errors.message')}
                </p>
              ) : null}
            </FormItem>
          )}
        />

        <Button
          type="submit"
          isLoading={status === 'executing'}
          className="self-stretch md:self-end"
        >
          {t('fields.submit')}
          {status === 'executing' ? null : (
            <Icons.send className="ml-2 h-4 w-4" />
          )}
        </Button>
      </form>
    </Form>
  );
}
